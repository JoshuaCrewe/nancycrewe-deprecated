<?php include 'header.php'; ?>

  <section>
    <div class="row">

      <div class="gallery cf">
          <?php for ($i = 0; $i < 11; $i++) : ?>
          <a href="#3" class="gallery-image">
            <div class="image" style="background-image: url('//unsplash.it/300/300')"> </div>
            <!-- <div class="gallery&#45;image&#45;meta"> -->
            <!--     <span class="gallery&#45;image&#45;price">£100</span> -->
            <!--     <i class="fa fa&#45;circle sold"></i> -->
            <!-- </div> -->
        </a>
        <?php endfor; ?>
    </div>
  
  </section>

<?php include 'footer.php'; ?>
