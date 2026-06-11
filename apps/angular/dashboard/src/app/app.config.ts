import {
  ApplicationConfig,
  provideZoneChangeDetection,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';

// Import các cấu hình từ tds-ui theo tài liệu
import { TDS_I18N, vi_VN } from 'tds-ui/i18n';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';

// Đăng ký tiếng Việt cho Angular core
registerLocaleData(localeVi);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideAnimations(), // Thay thế cho BrowserAnimationsModule

    // Cấu hình ngôn ngữ cho TDS UI
    { provide: TDS_I18N, useValue: vi_VN },

    // Import các module bổ trợ bắt buộc của CDK mà TDS yêu cầu
    importProvidersFrom(ScrollingModule, DragDropModule, ReactiveFormsModule),
  ],
};
