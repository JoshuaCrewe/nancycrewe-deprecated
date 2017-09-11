<?php global $i ?>
<figure class="gallery-item" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">

    <!-- The href is the full sized image there needs to be a data-size  -->
    <a href="//unsplash.it/1200/800?image=1<?php echo $i ?>" itemprop="contentUrl" data-size="1200x800">

        <!-- The image src is the thumbnail -->
        <img src="//unsplash.it/300/300?image=1<?php echo $i ?>" class="gallery-image" itemprop="thumbnail" alt="Image description" />
    </a>

    <figcaption itemprop="caption description" class="hide">Image caption <?php echo $i ?></figcaption>

    <!-- Check to see if the item has a tag of sold -->
    <?php if ($i % 3 == 0) : ?>
        <i class="fa fa-circle red sold"></i>
    <?php else : ?>
        <i class="fa fa-circle red sold hidden"></i>
    <?php endif; ?>

</figure>
