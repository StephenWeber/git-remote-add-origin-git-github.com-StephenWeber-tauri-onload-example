# Tauri OnLoad Example

This is a kind of still-life exercise in disabling some frontend behaviors until a slow backend process has completed.
It could be loading a JSON file from disk, or many HTTP calls, or a database migration.

## Dependencies

This should be a plain vanilla Tauri app, but see https://tauri.app/v1/guides/getting-started/prerequisites/ for installing Rust, tauri, and other tooling for your platform.

## How to run

once you've downloaded the code, you can run:

```shell

cargo tauri dev
```

## What you will see

A window will come up with a text box and a button.
The button will be disabled and the text box `placeholder` suggests it is not ready yet.

After 5 seconds, the window updates so that the button is enabled and the placeholder says `Search input` to suggest it is ready to run.

You can type in your search value while the "data" is loading, or otherwise interact with the application.

This was an experiment to teach myself how to load a large file without disrupting the user experience of starting to use the application.
