#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::{thread::sleep, time::Duration};

#[tauri::command]
async fn startup() -> Result<(), String>{
    sleep(Duration::from_secs(5));
    
    Ok(())
}

#[tauri::command]
fn search() -> String {
    "Search Result".to_string()
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![startup, search])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
