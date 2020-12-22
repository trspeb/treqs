#!/usr/bin/env node

'use strict'

const chalk = require('chalk')
const clear = require('clear')
const figlet = require('figlet')
const program = require('commander')
const fs = require('fs')
const path = require('path')

/// fancy displays
clear()

console.log(
	chalk.yellow(
		figlet.textSync('TReqs', {horizontalLayout: 'full'})
	)
);

/// arg processing
program
  .version('1.0.0')
  .option('-d, --debug', 'output extra debugging')
  .option('-c, --compile <dir>', 'compile the files of the specified dirstory')

program.parse(process.argv)

if (program.debug) console.log(program.opts())

/// text processing class
class Treqs {

	constructor() {
		this.project = {journals: []}
		this.states = {
			IDLE: 1,
			JOURNAL: 2,
			DOCUMENT: 3
		}
		this.state = this.states.IDLE
	}

	add(str) {
		this.state = this.states.IDLE
		var strs = str.split('\n')
		strs.forEach(line => {
			if (this.state == this.states.IDLE) {
				if (/^.journal/.test(line)) {
					this.state = this.states.JOURNAL
					console.log('found !')
					try {
						var date = line.match(/^.journal (\d{4}-\d{2}-\d{2})/)[1]
						this.project.journals.push(date)
						console.log(this.project)
					}
					catch (e) {
						console.log(`error ${e}`)
					}
				}
			}

		})
		/// recursive thing ?

	}

}

var prj = new Treqs()

/// command processing
if (program.compile) {
	console.log(`Treqs will now compile the projet ${program.compile}`)
	var prjPath = program.compile
	fs.readdir(prjPath, (err, files) => {
		if (err) throw err
		files.forEach(file => {
			console.log(`- processing ${file}`);
			var file = path.join(prjPath, file)
			fs.readFile(file, function(err, data) {
				if (err) throw err
				//console.log(data.toString('utf8'))
				prj.add(data.toString('utf8'))
			})
		})
	})
}

console.log(`final:`)
console.log(prj.project)
