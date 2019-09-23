use quicli::prelude::*;
use structopt::StructOpt;
use std::path::Path;

/// treqs experimental
#[derive(StructOpt)]
#[derive(Debug)]
#[structopt(rename_all = "kebab-case")]
enum Cli {
    /// to compile a project directory into reports
    Compile {
        /// The path to the file to read
        #[structopt(parse(from_os_str))]
        path: std::path::PathBuf,
    }
}


fn main() -> CliResult {
    match Cli::from_args() {
        Cli::Compile {argPath} => {
            println!("{:?}", argPath);
            println!("TREQS project compilation to reports");
            let path = Path::new(argPath)
            assert_eq!(path.is_dir(), true);
        }
    }
    Ok(())
}
