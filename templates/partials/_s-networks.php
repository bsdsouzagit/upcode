<?php if ( have_rows( 'repeater_socials', 'option' ) ) : ?>
  <ul class="social-networks">
    <?php  while ( have_rows( 'repeater_socials', 'option' ) ) : the_row(); ?>
      <li><a href="<?php the_sub_field( 'socials_link' ); ?>" target="_blank"><?php the_sub_field( 'socials_ico' ); ?></a></li>
    <?php endwhile; ?>
  </ul>
<?php endif; ?>