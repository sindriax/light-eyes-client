import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const localStorage = inject(LocalStorageService);

  if (!localStorage.getItem('token')) {
    router.navigate(['/login']);
    return false;
  }
  return true;
}