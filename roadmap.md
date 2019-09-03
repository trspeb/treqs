# Treqs
proto spec & roadmap

## Treqs features

* journalization w/o config mngt sys (ie git, svn)
* markdown like with 
	section, subsection
	req
	risk
* e-sign CLI ==> markdown sign ?
* report production
	in markdown ? check ruby markdown to PDF support (pure ruby)
	as a shpinx prj ?

## roadmap

* confirm ruby
* proto SW in ruby
	==> look @ markdown libs
	==> only core: journal, reports

## language

* blocks & functions
  * blocks
    * journal = (documents)*, blocks will be sorted by date (!)
	* documents = (req | info)*
  * instruction
    * author WS: starting at that point, the default author is WS
	* section WS: starting at that point, the default section is WS
	* baseline W: freeze a baseline at this point. Calculate a MD5SUM or so for signature purpose

then

* add a project file with project name
* add a makefile (or rake ?, or eq. in javascript)
* add a pre-file with aliases for authors
* add architecture instructions, definition instructions

## actions

feature of the CLI

* recognizing modifications when compiling ?
* signature of baselines ?

commands

* treqs compile: produce the database in JSON
* treqs changelog: produce a report on the changes in md
* treqs report: produce a metrix report in md
* treqs specs: produce the documents in md
