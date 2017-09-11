#!/bin/bash
#
# Turn a static site into WordPress
# using wp-cli

# get prompt values
WP_PATH=$1
THEME=$2
DATABASE=$3

# first check a few details
if test ! "$(which wp)"; then
    printf "WP-Cli is not installed as 'wp'"
    printf "Download wp-cli here: https://wp-cli.org/#installing"
    exit;
fi

if [ ! -f ~/.wp-cli/config.yml ]; then
    printf "You must have a global config.yml file that outlines core install and config variables"
    printf "please create one at ~/wp-cli/config.yml"
    exit;
fi


# make the theme directory
mkdir "public/$THEME"

# for each file in the current folder
# move to our new theme folder
ignore="node_modules .gulp .gitignore gulpfile.js package.json bootstrap.sh public/$THEME";

for filename in public/*; do
  if [[ ! $ignore =~ $filename ]]; then
    mv "$filename" "$(PWD)/public/$THEME"
  fi
done

# download wordpress files
wp core download --path="public/$WP_PATH"

# create wp-cli config file
printf "Creating wp-cli.yml file..."
touch public/wp-cli.yml
echo "path: $WP_PATH" >> public/wp-cli.yml
echo -e "apache_modules:\n\t - mod_rewrite" >> public/wp-cli.yml
printf "Success: wp-cli.yml created."

# create content directory
printf "Creating content directory..."
mkdir public/content;

# copy wp-content to new path
cp -r "public/$WP_PATH/wp-content/" public/content

# move the new theme folder to themes
mv "public/$THEME" "$(PWD)/public/content/themes"
printf "Success: content directory created."

# TODO: This could do with some feedback in the console from here on in.

# create the wp-config file
wp core config --dbname="$DATABASE" --extra-php --path="public/$WP_PATH" <<PHP
define('WP_DEBUG', true);
define('WP_CONTENT_DIR', dirname(__FILE__) . '/content/');
define('WP_CONTENT_URL', 'http://localhost:8000/content');
define('WP_HOME','http://localhost:8000');
define('WP_SITEURL','http://localhost:8000/wp');
PHP

# Move the config in to place
mv public/wp/wp-config.php public/wp-config.php

# create the database
wp db create --path="public/$WP_PATH"

# install the site
wp core install --url="http://localhost:8000" --title="Wordpress" --path="public/$WP_PATH"

# set permalinks
wp rewrite structure '/%year%/%monthnum%/%day%/%postname%/' --hard --path="public/$WP_PATH"
wp rewrite flush --path="public/$WP_PATH"

# copy index and .htaccess to root
cp "public/$WP_PATH/index.php" "public/index.php"
cp "public/$WP_PATH/.htaccess" "public/.htaccess"

# Edit index.php to point to correct path of wp-blog-header.php
sed -i '' "s/\/wp-blog-header/\/$WP_PATH\/wp-blog-header/g" public/index.php

# update the gitignore for the new structure ...
# ... change the directory paths for assets ...
sed -i '' "s/\assets/\content\/themes\/$THEME\/assets/g" .gitignore
# ... ignore the wp core and the uploads
echo -e "\napp\/wp\n\napp\/content/uploads" >> .gitignore

# Update the project.json to include the new paths
sed -i '' "s/assets/content\/themes\/$THEME\/assets/g" project.json

# Create functions folder and files for starter wordpress theme
git clone git@bitbucket.org:venncreative/wp-functions.git tmp

mv tmp/functions public/content/themes/"$THEME"/
mv tmp/functions.php public/content/themes/"$THEME"/
rm -r tmp

# Add style.css to theme root
touch public/content/themes/"$THEME"/style.css

# set the new theme as active.
wp theme activate "$THEME" --path="public/$WP_PATH"
