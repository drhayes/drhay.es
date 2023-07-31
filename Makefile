LINKS = $(wildcard links/*)

site/_redirects: site $(LINKS)
	touch $@
	echo "/*	https://drhayes.io" >> $@

site:
	mkdir $@
