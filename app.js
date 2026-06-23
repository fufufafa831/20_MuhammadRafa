// ============================================================
//  TiketGo - app.js
//  Fungsi bersama untuk autentikasi & session management
// ============================================================

/**
 * Ambil data user yang sedang login dari localStorage.
 * @returns {Object|null} { username, email } atau null jika belum login
 */
function getUser() {
  try {
    const raw = localStorage.getItem('tiketgo_session');
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

/**
 * Ambil semua user terdaftar.
 * @returns {Array}
 */
function getAllUsers() {
  try {
    return JSON.parse(localStorage.getItem('tiketgo_users') || '[]');
  } catch {
    return [];
  }
}

/**
 * Logout: hapus sesi dan redirect ke index.
 */
function logout() {
  localStorage.removeItem('tiketgo_session');
  location.href = 'index.html';
}
