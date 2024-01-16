export default function (errorCode) {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Hatalı e-posta';
    case 'auth/email-already-exists':
      return 'Sağlanan e-posta zaten mevcut bir kullanıcı tarafından kullanılıyor.';
    case 'auth/user-not-found':
      return 'Kullanıcı bulunamadı';
    case 'auth/invalid-password':
      return 'Hatalı şifre';

    default:
      return errorCode;
  }
}
