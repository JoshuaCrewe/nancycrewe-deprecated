<?php include 'header.php'; ?>

<!-- 
    There are some objectives to aim for with this template.

    - Each image will be its own post. There will be two images attached. The
    full sized image and the thumbnail. These will be generated
    automatically preferably.

    - Each post will have a term from the type taxonomy. The two terms so
    far are 'Print' and 'Painting'. We could have one for Sketching.

    - These terms will be used to act as filters for the content. Using
    something like mixitup (https://www.kunkalabs.com/mixitup/) to do
    the actual filtering.
-->
<div class="row">
    <div class="column one-whole">
        
        <div class="my-gallery" itemscope itemtype="http://schema.org/ImageGallery">

            <?php for ($i = 0; $i < 11; $i++) : ?>
                <figure class="gallery-item" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">


                    <!-- The href is the full sized image there needs to be a data-size  -->
                    <a href="//unsplash.it/600x400" itemprop="contentUrl" data-size="600x400">

                        <!-- The image src is the thumbnail -->
                        <img src="//unsplash.it/300x300" class="gallery-image" itemprop="thumbnail" alt="Image description" />
                    </a>

                    <figcaption itemprop="caption description" class="hide">Image caption <?php echo $i ?></figcaption>

                    <?php if ($i % 3 == 0) : ?>
                        <i class="fa fa-circle red sold"></i>
                    <?php else : ?>
                        <i class="fa fa-circle red sold hidden"></i>
                    <?php endif; ?>

                </figure>
            <?php endfor; ?>

        </div>

    </div>
</div>

<!-- Root element of PhotoSwipe. Must have class pswp. -->
<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">

    <!-- Background of PhotoSwipe. 
         It's a separate element as animating opacity is faster than rgba(). -->
    <div class="pswp__bg"></div>

    <!-- Slides wrapper with overflow:hidden. -->
    <div class="pswp__scroll-wrap">

        <!-- Container that holds slides. 
            PhotoSwipe keeps only 3 of them in the DOM to save memory.
            Don't modify these 3 pswp__item elements, data is added later on. -->
        <div class="pswp__container">
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
        </div>

        <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
        <div class="pswp__ui pswp__ui--hidden">

            <div class="pswp__top-bar">

                <!--  Controls are self-explanatory. Order can be changed. -->

                <div class="pswp__counter"></div>

                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

                <button class="pswp__button pswp__button--share" title="Share"></button>

                <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

                <!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->
                <!-- element will get class pswp__preloader--active when preloader is running -->
                <div class="pswp__preloader">
                    <div class="pswp__preloader__icn">
                      <div class="pswp__preloader__cut">
                        <div class="pswp__preloader__donut"></div>
                      </div>
                    </div>
                </div>
            </div>

            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div class="pswp__share-tooltip"></div> 
            </div>

            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
            </button>

            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
            </button>

            <div class="pswp__caption">
                <div class="pswp__caption__center"></div>
            </div>

        </div>

    </div>

</div>

<?php include 'footer.php'; ?>