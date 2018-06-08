<?php get_template_part( 'partials/_h-page' ); ?>

<div class="container">
	<div class="row">
		<div class="col-md-8">
			<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
				<article <?php post_class( 'page index' ); ?> >

					<div class="content">
						<?php the_content(); ?>
					</div>

				</article>
			<?php endwhile; ?>
		</div>

		<?php get_sidebar(); ?>
	</div>
</div>