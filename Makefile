all:
	@echo '<ul>' > index.html
	@ls try_*.html | sort | sed 's!.*!<li><a href="&">&</a></li>!g' >> index.html
	@echo '</ul>' >> index.html
