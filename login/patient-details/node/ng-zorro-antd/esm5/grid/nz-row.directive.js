/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Input, NgZone, Renderer2 } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { fromEvent, Subject } from 'rxjs';
import { auditTime, takeUntil } from 'rxjs/operators';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
/** @enum {number} */
var Breakpoint = {
    'xxl': 0,
    'xl': 1,
    'lg': 2,
    'md': 3,
    'sm': 4,
    'xs': 5,
};
export { Breakpoint };
Breakpoint[Breakpoint['xxl']] = 'xxl';
Breakpoint[Breakpoint['xl']] = 'xl';
Breakpoint[Breakpoint['lg']] = 'lg';
Breakpoint[Breakpoint['md']] = 'md';
Breakpoint[Breakpoint['sm']] = 'sm';
Breakpoint[Breakpoint['xs']] = 'xs';
/** @type {?} */
var responsiveMap = {
    xs: '(max-width: 575px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1600px)'
};
var NzRowDirective = /** @class */ (function () {
    function NzRowDirective(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.mediaMatcher = mediaMatcher;
        this.ngZone = ngZone;
        this.platform = platform;
        this.nzAlign = 'top';
        this.nzJustify = 'start';
        this.el = this.elementRef.nativeElement;
        this.prefixCls = 'ant-row';
        this.actualGutter$ = new Subject();
        this.destroy$ = new Subject();
    }
    /**
     * @return {?}
     */
    NzRowDirective.prototype.calculateGutter = /**
     * @return {?}
     */
    function () {
        if (typeof this.nzGutter !== 'object') {
            return this.nzGutter;
        }
        else if (this.breakPoint && this.nzGutter[this.breakPoint]) {
            return this.nzGutter[this.breakPoint];
        }
        else {
            return 0;
        }
    };
    /**
     * @return {?}
     */
    NzRowDirective.prototype.updateGutter = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var actualGutter = this.calculateGutter();
        if (this.actualGutter !== actualGutter) {
            this.actualGutter = actualGutter;
            this.actualGutter$.next(this.actualGutter);
            this.renderer.setStyle(this.el, 'margin-left', "-" + this.actualGutter / 2 + "px");
            this.renderer.setStyle(this.el, 'margin-right', "-" + this.actualGutter / 2 + "px");
        }
    };
    /**
     * @return {?}
     */
    NzRowDirective.prototype.watchMedia = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // @ts-ignore
        Object.keys(responsiveMap).map((/**
         * @param {?} screen
         * @return {?}
         */
        function (screen) {
            /** @type {?} */
            var matchBelow = _this.mediaMatcher.matchMedia(responsiveMap[screen]).matches;
            if (matchBelow) {
                _this.breakPoint = screen;
            }
        }));
        this.updateGutter();
    };
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
    /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    NzRowDirective.prototype.setClassMap = /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a["" + this.prefixCls] = !this.nzType,
            _a[this.prefixCls + "-" + this.nzType] = this.nzType,
            _a[this.prefixCls + "-" + this.nzType + "-" + this.nzAlign] = this.nzType && this.nzAlign,
            _a[this.prefixCls + "-" + this.nzType + "-" + this.nzJustify] = this.nzType && this.nzJustify,
            _a);
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    };
    /**
     * @return {?}
     */
    NzRowDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
        this.watchMedia();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzRowDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzType || changes.nzAlign || changes.nzJustify) {
            this.setClassMap();
        }
        if (changes.nzGutter) {
            this.updateGutter();
        }
    };
    /**
     * @return {?}
     */
    NzRowDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.platform.isBrowser) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                fromEvent(window, 'resize')
                    .pipe(auditTime(16), takeUntil(_this.destroy$))
                    .subscribe((/**
                 * @return {?}
                 */
                function () { return _this.watchMedia(); }));
            }));
        }
    };
    /**
     * @return {?}
     */
    NzRowDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzRowDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-row],nz-row',
                    exportAs: 'nzRow',
                    providers: [NzUpdateHostClassService]
                },] }
    ];
    /** @nocollapse */
    NzRowDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NzUpdateHostClassService },
        { type: MediaMatcher },
        { type: NgZone },
        { type: Platform }
    ]; };
    NzRowDirective.propDecorators = {
        nzType: [{ type: Input }],
        nzAlign: [{ type: Input }],
        nzJustify: [{ type: Input }],
        nzGutter: [{ type: Input }]
    };
    return NzRowDirective;
}());
export { NzRowDirective };
if (false) {
    /** @type {?} */
    NzRowDirective.prototype.nzType;
    /** @type {?} */
    NzRowDirective.prototype.nzAlign;
    /** @type {?} */
    NzRowDirective.prototype.nzJustify;
    /** @type {?} */
    NzRowDirective.prototype.nzGutter;
    /**
     * @type {?}
     * @private
     */
    NzRowDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzRowDirective.prototype.prefixCls;
    /**
     * @type {?}
     * @private
     */
    NzRowDirective.prototype.breakPoint;
    /** @type {?} */
    NzRowDirective.prototype.actualGutter;
    /** @type {?} */
    NzRowDirective.prototype.actualGutter$;
    /** @type {?} */
    NzRowDirective.prototype.destroy$;
    /** @type {?} */
    NzRowDirective.prototype.elementRef;
    /** @type {?} */
    NzRowDirective.prototype.renderer;
    /** @type {?} */
    NzRowDirective.prototype.nzUpdateHostClassService;
    /** @type {?} */
    NzRowDirective.prototype.mediaMatcher;
    /** @type {?} */
    NzRowDirective.prototype.ngZone;
    /** @type {?} */
    NzRowDirective.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcm93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZ3JpZC8iLCJzb3VyY2VzIjpbIm56LXJvdy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUlOLFNBQVMsRUFFVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEQsT0FBTyxFQUFtQix3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7SUFPN0UsUUFBSztJQUNMLE9BQUk7SUFDSixPQUFJO0lBQ0osT0FBSTtJQUNKLE9BQUk7SUFDSixPQUFJOzs7c0JBTEosS0FBSyxLQUFMLEtBQUs7c0JBQ0wsSUFBSSxLQUFKLElBQUk7c0JBQ0osSUFBSSxLQUFKLElBQUk7c0JBQ0osSUFBSSxLQUFKLElBQUk7c0JBQ0osSUFBSSxLQUFKLElBQUk7c0JBQ0osSUFBSSxLQUFKLElBQUk7O0lBS0EsYUFBYSxHQUFrQjtJQUNuQyxFQUFFLEVBQUUsb0JBQW9CO0lBQ3hCLEVBQUUsRUFBRSxvQkFBb0I7SUFDeEIsRUFBRSxFQUFFLG9CQUFvQjtJQUN4QixFQUFFLEVBQUUsb0JBQW9CO0lBQ3hCLEVBQUUsRUFBRSxxQkFBcUI7SUFDekIsR0FBRyxFQUFFLHFCQUFxQjtDQUMzQjtBQUVEO0lBMkRFLHdCQUNTLFVBQXNCLEVBQ3RCLFFBQW1CLEVBQ25CLHdCQUFrRCxFQUNsRCxZQUEwQixFQUMxQixNQUFjLEVBQ2QsUUFBa0I7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QUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztpQkFDdEM7Ozs7Z0JBN0NDLFVBQVU7Z0JBTVYsU0FBUztnQkFTZSx3QkFBd0I7Z0JBTHpDLFlBQVk7Z0JBUm5CLE1BQU07Z0JBU0MsUUFBUTs7O3lCQW9DZCxLQUFLOzBCQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLOztJQTBGUixxQkFBQztDQUFBLEFBbkdELElBbUdDO1NBOUZZLGNBQWM7OztJQUN6QixnQ0FBd0I7O0lBQ3hCLGlDQUFrQzs7SUFDbEMsbUNBQXdDOztJQUN4QyxrQ0FBNEM7Ozs7O0lBQzVDLDRCQUF3RDs7Ozs7SUFDeEQsbUNBQThCOzs7OztJQUM5QixvQ0FBK0I7O0lBQy9CLHNDQUFxQjs7SUFDckIsdUNBQXNDOztJQUN0QyxrQ0FBeUI7O0lBNkN2QixvQ0FBNkI7O0lBQzdCLGtDQUEwQjs7SUFDMUIsa0RBQXlEOztJQUN6RCxzQ0FBaUM7O0lBQ2pDLGdDQUFxQjs7SUFDckIsa0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNZWRpYU1hdGNoZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgYXVkaXRUaW1lLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEluZGV4YWJsZU9iamVjdCwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuZXhwb3J0IHR5cGUgTnpKdXN0aWZ5ID0gJ3N0YXJ0JyB8ICdlbmQnIHwgJ2NlbnRlcicgfCAnc3BhY2UtYXJvdW5kJyB8ICdzcGFjZS1iZXR3ZWVuJztcbmV4cG9ydCB0eXBlIE56QWxpZ24gPSAndG9wJyB8ICdtaWRkbGUnIHwgJ2JvdHRvbSc7XG5leHBvcnQgdHlwZSBOelR5cGUgPSAnZmxleCcgfCBudWxsO1xuXG5leHBvcnQgZW51bSBCcmVha3BvaW50IHtcbiAgJ3h4bCcsXG4gICd4bCcsXG4gICdsZycsXG4gICdtZCcsXG4gICdzbScsXG4gICd4cydcbn1cblxuZXhwb3J0IHR5cGUgQnJlYWtwb2ludE1hcCA9IHsgW2luZGV4IGluIGtleW9mIHR5cGVvZiBCcmVha3BvaW50XTogc3RyaW5nIH07XG5cbmNvbnN0IHJlc3BvbnNpdmVNYXA6IEJyZWFrcG9pbnRNYXAgPSB7XG4gIHhzOiAnKG1heC13aWR0aDogNTc1cHgpJyxcbiAgc206ICcobWluLXdpZHRoOiA1NzZweCknLFxuICBtZDogJyhtaW4td2lkdGg6IDc2OHB4KScsXG4gIGxnOiAnKG1pbi13aWR0aDogOTkycHgpJyxcbiAgeGw6ICcobWluLXdpZHRoOiAxMjAwcHgpJyxcbiAgeHhsOiAnKG1pbi13aWR0aDogMTYwMHB4KSdcbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuei1yb3ddLG56LXJvdycsXG4gIGV4cG9ydEFzOiAnbnpSb3cnLFxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIE56Um93RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIG56VHlwZTogTnpUeXBlO1xuICBASW5wdXQoKSBuekFsaWduOiBOekFsaWduID0gJ3RvcCc7XG4gIEBJbnB1dCgpIG56SnVzdGlmeTogTnpKdXN0aWZ5ID0gJ3N0YXJ0JztcbiAgQElucHV0KCkgbnpHdXR0ZXI6IG51bWJlciB8IEluZGV4YWJsZU9iamVjdDtcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LXJvdyc7XG4gIHByaXZhdGUgYnJlYWtQb2ludDogQnJlYWtwb2ludDtcbiAgYWN0dWFsR3V0dGVyOiBudW1iZXI7XG4gIGFjdHVhbEd1dHRlciQgPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG4gIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcblxuICBjYWxjdWxhdGVHdXR0ZXIoKTogbnVtYmVyIHtcbiAgICBpZiAodHlwZW9mIHRoaXMubnpHdXR0ZXIgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gdGhpcy5uekd1dHRlcjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnJlYWtQb2ludCAmJiB0aGlzLm56R3V0dGVyW3RoaXMuYnJlYWtQb2ludF0pIHtcbiAgICAgIHJldHVybiB0aGlzLm56R3V0dGVyW3RoaXMuYnJlYWtQb2ludF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUd1dHRlcigpOiB2b2lkIHtcbiAgICBjb25zdCBhY3R1YWxHdXR0ZXIgPSB0aGlzLmNhbGN1bGF0ZUd1dHRlcigpO1xuICAgIGlmICh0aGlzLmFjdHVhbEd1dHRlciAhPT0gYWN0dWFsR3V0dGVyKSB7XG4gICAgICB0aGlzLmFjdHVhbEd1dHRlciA9IGFjdHVhbEd1dHRlcjtcbiAgICAgIHRoaXMuYWN0dWFsR3V0dGVyJC5uZXh0KHRoaXMuYWN0dWFsR3V0dGVyKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ21hcmdpbi1sZWZ0JywgYC0ke3RoaXMuYWN0dWFsR3V0dGVyIC8gMn1weGApO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnbWFyZ2luLXJpZ2h0JywgYC0ke3RoaXMuYWN0dWFsR3V0dGVyIC8gMn1weGApO1xuICAgIH1cbiAgfVxuXG4gIHdhdGNoTWVkaWEoKTogdm9pZCB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIE9iamVjdC5rZXlzKHJlc3BvbnNpdmVNYXApLm1hcCgoc2NyZWVuOiBCcmVha3BvaW50KSA9PiB7XG4gICAgICBjb25zdCBtYXRjaEJlbG93ID0gdGhpcy5tZWRpYU1hdGNoZXIubWF0Y2hNZWRpYShyZXNwb25zaXZlTWFwW3NjcmVlbl0pLm1hdGNoZXM7XG4gICAgICBpZiAobWF0Y2hCZWxvdykge1xuICAgICAgICB0aGlzLmJyZWFrUG9pbnQgPSBzY3JlZW47XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy51cGRhdGVHdXR0ZXIoKTtcbiAgfVxuXG4gIC8qKiB0ZW1wIHNvbHV0aW9uIHNpbmNlIG5vIG1ldGhvZCBhZGQgY2xhc3NNYXAgdG8gaG9zdCBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy83Mjg5Ki9cbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9YF06ICF0aGlzLm56VHlwZSxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLm56VHlwZX1gXTogdGhpcy5uelR5cGUsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5uelR5cGV9LSR7dGhpcy5uekFsaWdufWBdOiB0aGlzLm56VHlwZSAmJiB0aGlzLm56QWxpZ24sXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5uelR5cGV9LSR7dGhpcy5uekp1c3RpZnl9YF06IHRoaXMubnpUeXBlICYmIHRoaXMubnpKdXN0aWZ5XG4gICAgfTtcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwgY2xhc3NNYXApO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxuICAgIHB1YmxpYyBtZWRpYU1hdGNoZXI6IE1lZGlhTWF0Y2hlcixcbiAgICBwdWJsaWMgbmdab25lOiBOZ1pvbmUsXG4gICAgcHVibGljIHBsYXRmb3JtOiBQbGF0Zm9ybVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIHRoaXMud2F0Y2hNZWRpYSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56VHlwZSB8fCBjaGFuZ2VzLm56QWxpZ24gfHwgY2hhbmdlcy5uekp1c3RpZnkpIHtcbiAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubnpHdXR0ZXIpIHtcbiAgICAgIHRoaXMudXBkYXRlR3V0dGVyKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIGF1ZGl0VGltZSgxNiksXG4gICAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgICAgICApXG4gICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLndhdGNoTWVkaWEoKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==