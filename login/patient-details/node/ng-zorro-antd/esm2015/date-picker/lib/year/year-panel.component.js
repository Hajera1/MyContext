/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CandyDate } from '../candy-date/candy-date';
/** @type {?} */
const MAX_ROW = 4;
/** @type {?} */
const MAX_COL = 3;
export class YearPanelComponent {
    constructor() {
        this.valueChange = new EventEmitter();
        this.decadePanelShow = new EventEmitter();
        this.prefixCls = 'ant-calendar-year-panel';
    }
    /**
     * @return {?}
     */
    get currentYear() {
        return this.value.getYear();
    }
    /**
     * @return {?}
     */
    get startYear() {
        return parseInt(`${this.currentYear / 10}`, 10) * 10;
    }
    /**
     * @return {?}
     */
    get endYear() {
        return this.startYear + 9;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.value || changes.disabledDate) {
            this.render();
        }
    }
    /**
     * @return {?}
     */
    previousDecade() {
        this.gotoYear(-10);
    }
    /**
     * @return {?}
     */
    nextDecade() {
        this.gotoYear(10);
    }
    /**
     * @param {?} _index
     * @param {?} yearData
     * @return {?}
     */
    trackPanelYear(_index, yearData) {
        return yearData.content;
    }
    /**
     * @private
     * @return {?}
     */
    render() {
        if (this.value) {
            this.panelYears = this.makePanelYears();
        }
    }
    // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
    /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    gotoYear(amount) {
        this.value = this.value.addYears(amount);
        // this.valueChange.emit(this.value); // Do not trigger final value change
        this.render();
    }
    /**
     * @private
     * @param {?} year
     * @return {?}
     */
    chooseYear(year) {
        this.value = this.value.setYear(year);
        this.valueChange.emit(this.value);
        this.render();
    }
    /**
     * @private
     * @return {?}
     */
    makePanelYears() {
        /** @type {?} */
        const years = [];
        /** @type {?} */
        const currentYear = this.currentYear;
        /** @type {?} */
        const startYear = this.startYear;
        /** @type {?} */
        const endYear = this.endYear;
        /** @type {?} */
        const previousYear = startYear - 1;
        /** @type {?} */
        let index = 0;
        for (let rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
            years[rowIndex] = [];
            for (let colIndex = 0; colIndex < MAX_COL; colIndex++) {
                /** @type {?} */
                const year = previousYear + index;
                /** @type {?} */
                const content = String(year);
                /** @type {?} */
                const disabled = this.disabledDate ? this.disabledDate(this.value.setYear(year).nativeDate) : false;
                /** @type {?} */
                const cell = (years[rowIndex][colIndex] = {
                    disabled,
                    content,
                    year,
                    title: content,
                    isCurrent: year === currentYear,
                    isLowerThanStart: year < startYear,
                    isBiggerThanEnd: year > endYear,
                    classMap: null,
                    onClick: null
                });
                cell.classMap = {
                    [`${this.prefixCls}-cell`]: true,
                    [`${this.prefixCls}-selected-cell`]: cell.isCurrent,
                    [`${this.prefixCls}-cell-disabled`]: disabled,
                    [`${this.prefixCls}-last-decade-cell`]: cell.isLowerThanStart,
                    [`${this.prefixCls}-next-decade-cell`]: cell.isBiggerThanEnd
                };
                if (cell.isLowerThanStart) {
                    cell.onClick = (/**
                     * @return {?}
                     */
                    () => this.previousDecade());
                }
                else if (cell.isBiggerThanEnd) {
                    cell.onClick = (/**
                     * @return {?}
                     */
                    () => this.nextDecade());
                }
                else {
                    cell.onClick = (/**
                     * @return {?}
                     */
                    () => this.chooseYear(cell.year));
                }
                index++;
            }
        }
        return years;
    }
}
YearPanelComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'year-panel',
                exportAs: 'yearPanel',
                template: "<div class=\"{{ prefixCls }}\">\n  <div>\n    <div class=\"{{ prefixCls }}-header\">\n      <a\n        class=\"{{ prefixCls }}-prev-decade-btn\"\n        role=\"button\"\n        (click)=\"previousDecade()\"\n        title=\"{{ locale.previousDecade }}\"\n      ></a>\n      <a\n        class=\"{{ prefixCls }}-decade-select\"\n        role=\"button\"\n        (click)=\"decadePanelShow.emit()\"\n        title=\"{{ locale.decadeSelect }}\"\n      >\n        <span class=\"{{ prefixCls }}-decade-select-content\">\n          {{ startYear }}-{{ endYear }}\n        </span>\n        <span class=\"{{ prefixCls }}-decade-select-arrow\">x</span>\n      </a>\n\n      <a class=\"{{ prefixCls }}-next-decade-btn\" (click)=\"nextDecade()\" title=\"{{ locale.nextDecade }}\" role=\"button\"></a>\n    </div>\n    <div class=\"{{ prefixCls }}-body\">\n      <table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\">\n        <tbody class=\"{{ prefixCls }}-tbody\">\n          <tr *ngFor=\"let row of panelYears\" role=\"row\">\n            <td *ngFor=\"let yearCell of row; trackBy: trackPanelYear\"\n              role=\"gridcell\"\n              title=\"{{ yearCell.title }}\"\n              (click)=\"yearCell.disabled ? null : yearCell.onClick()\"\n              [ngClass]=\"yearCell.classMap\"\n            >\n              <a class=\"{{ prefixCls }}-year\">{{ yearCell.content }}</a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>",
                styles: [
                    // Support disabledDate
                    `
      .ant-calendar-year-panel-cell-disabled .ant-calendar-year-panel-year,
      .ant-calendar-year-panel-cell-disabled .ant-calendar-year-panel-year:hover {
        color: rgba(0, 0, 0, 0.25);
        background: #f5f5f5;
        cursor: not-allowed;
      }
    `]
            }] }
];
/** @nocollapse */
YearPanelComponent.ctorParameters = () => [];
YearPanelComponent.propDecorators = {
    locale: [{ type: Input }],
    value: [{ type: Input }],
    valueChange: [{ type: Output }],
    disabledDate: [{ type: Input }],
    decadePanelShow: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    YearPanelComponent.prototype.locale;
    /** @type {?} */
    YearPanelComponent.prototype.value;
    /** @type {?} */
    YearPanelComponent.prototype.valueChange;
    /** @type {?} */
    YearPanelComponent.prototype.disabledDate;
    /** @type {?} */
    YearPanelComponent.prototype.decadePanelShow;
    /** @type {?} */
    YearPanelComponent.prototype.prefixCls;
    /** @type {?} */
    YearPanelComponent.prototype.panelYears;
}
/**
 * @record
 */
export function PanelYearData() { }
if (false) {
    /** @type {?} */
    PanelYearData.prototype.disabled;
    /** @type {?} */
    PanelYearData.prototype.content;
    /** @type {?} */
    PanelYearData.prototype.year;
    /** @type {?} */
    PanelYearData.prototype.title;
    /** @type {?} */
    PanelYearData.prototype.isCurrent;
    /** @type {?} */
    PanelYearData.prototype.isLowerThanStart;
    /** @type {?} */
    PanelYearData.prototype.isBiggerThanEnd;
    /** @type {?} */
    PanelYearData.prototype.classMap;
    /** @type {?} */
    PanelYearData.prototype.onClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyLyIsInNvdXJjZXMiOlsibGliL3llYXIveWVhci1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUl2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O01BRS9DLE9BQU8sR0FBRyxDQUFDOztNQUNYLE9BQU8sR0FBRyxDQUFDO0FBcUJqQixNQUFNLE9BQU8sa0JBQWtCO0lBdUI3QjtRQW5CbUIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBSTVDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQVk5RCxjQUFTLEdBQVcseUJBQXlCLENBQUM7SUFHL0IsQ0FBQzs7OztJQWJoQixJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7OztJQUNELElBQUksU0FBUztRQUNYLE9BQU8sUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDdkQsQ0FBQzs7OztJQUNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFPRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDekMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDOzs7O0lBRUQsY0FBYztRQUNaLElBQUksQ0FB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Q3hCLGdDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuXG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICcuLi9jYW5keS1kYXRlL2NhbmR5LWRhdGUnO1xuXG5jb25zdCBNQVhfUk9XID0gNDtcbmNvbnN0IE1BWF9DT0wgPSAzO1xuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICd5ZWFyLXBhbmVsJyxcbiAgZXhwb3J0QXM6ICd5ZWFyUGFuZWwnLFxuICB0ZW1wbGF0ZVVybDogJ3llYXItcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtcbiAgICAvLyBTdXBwb3J0IGRpc2FibGVkRGF0ZVxuICAgIGBcbiAgICAgIC5hbnQtY2FsZW5kYXIteWVhci1wYW5lbC1jZWxsLWRpc2FibGVkIC5hbnQtY2FsZW5kYXIteWVhci1wYW5lbC15ZWFyLFxuICAgICAgLmFudC1jYWxlbmRhci15ZWFyLXBhbmVsLWNlbGwtZGlzYWJsZWQgLmFudC1jYWxlbmRhci15ZWFyLXBhbmVsLXllYXI6aG92ZXIge1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIH1cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgWWVhclBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbG9jYWxlOiBOekNhbGVuZGFySTE4bkludGVyZmFjZTtcblxuICBASW5wdXQoKSB2YWx1ZTogQ2FuZHlEYXRlO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcblxuICBASW5wdXQoKSBkaXNhYmxlZERhdGU6IChkYXRlOiBEYXRlKSA9PiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBkZWNhZGVQYW5lbFNob3cgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgZ2V0IGN1cnJlbnRZZWFyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWUuZ2V0WWVhcigpO1xuICB9XG4gIGdldCBzdGFydFllYXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoYCR7dGhpcy5jdXJyZW50WWVhciAvIDEwfWAsIDEwKSAqIDEwO1xuICB9XG4gIGdldCBlbmRZZWFyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuc3RhcnRZZWFyICsgOTtcbiAgfVxuXG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1jYWxlbmRhci15ZWFyLXBhbmVsJztcbiAgcGFuZWxZZWFyczogUGFuZWxZZWFyRGF0YVtdW107XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy52YWx1ZSB8fCBjaGFuZ2VzLmRpc2FibGVkRGF0ZSkge1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBwcmV2aW91c0RlY2FkZSgpOiB2b2lkIHtcbiAgICB0aGlzLmdvdG9ZZWFyKC0xMCk7XG4gIH1cblxuICBuZXh0RGVjYWRlKCk6IHZvaWQge1xuICAgIHRoaXMuZ290b1llYXIoMTApO1xuICB9XG5cbiAgdHJhY2tQYW5lbFllYXIoX2luZGV4OiBudW1iZXIsIHllYXJEYXRhOiBQYW5lbFllYXJEYXRhKTogc3RyaW5nIHtcbiAgICByZXR1cm4geWVhckRhdGEuY29udGVudDtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLnBhbmVsWWVhcnMgPSB0aGlzLm1ha2VQYW5lbFllYXJzKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gUmUtcmVuZGVyIHBhbmVsIGNvbnRlbnQgYnkgdGhlIGhlYWRlcidzIGJ1dHRvbnMgKE5PVEU6IERvIG5vdCB0cnkgdG8gdHJpZ2dlciBmaW5hbCB2YWx1ZSBjaGFuZ2UpXG4gIHByaXZhdGUgZ290b1llYXIoYW1vdW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS5hZGRZZWFycyhhbW91bnQpO1xuICAgIC8vIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTsgLy8gRG8gbm90IHRyaWdnZXIgZmluYWwgdmFsdWUgY2hhbmdlXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hvb3NlWWVhcih5ZWFyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS5zZXRZZWFyKHllYXIpO1xuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBtYWtlUGFuZWxZZWFycygpOiBQYW5lbFllYXJEYXRhW11bXSB7XG4gICAgY29uc3QgeWVhcnM6IFBhbmVsWWVhckRhdGFbXVtdID0gW107XG4gICAgY29uc3QgY3VycmVudFllYXIgPSB0aGlzLmN1cnJlbnRZZWFyO1xuICAgIGNvbnN0IHN0YXJ0WWVhciA9IHRoaXMuc3RhcnRZZWFyO1xuICAgIGNvbnN0IGVuZFllYXIgPSB0aGlzLmVuZFllYXI7XG4gICAgY29uc3QgcHJldmlvdXNZZWFyID0gc3RhcnRZZWFyIC0gMTtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGZvciAobGV0IHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCBNQVhfUk9XOyByb3dJbmRleCsrKSB7XG4gICAgICB5ZWFyc1tyb3dJbmRleF0gPSBbXTtcbiAgICAgIGZvciAobGV0IGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCBNQVhfQ09MOyBjb2xJbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IHllYXIgPSBwcmV2aW91c1llYXIgKyBpbmRleDtcbiAgICAgICAgY29uc3QgY29udGVudCA9IFN0cmluZyh5ZWFyKTtcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkRGF0ZSA/IHRoaXMuZGlzYWJsZWREYXRlKHRoaXMudmFsdWUuc2V0WWVhcih5ZWFyKS5uYXRpdmVEYXRlKSA6IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGNlbGw6IFBhbmVsWWVhckRhdGEgPSAoeWVhcnNbcm93SW5kZXhdW2NvbEluZGV4XSA9IHtcbiAgICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgIHllYXIsXG4gICAgICAgICAgdGl0bGU6IGNvbnRlbnQsXG4gICAgICAgICAgaXNDdXJyZW50OiB5ZWFyID09PSBjdXJyZW50WWVhcixcbiAgICAgICAgICBpc0xvd2VyVGhhblN0YXJ0OiB5ZWFyIDwgc3RhcnRZZWFyLFxuICAgICAgICAgIGlzQmlnZ2VyVGhhbkVuZDogeWVhciA+IGVuZFllYXIsXG4gICAgICAgICAgY2xhc3NNYXA6IG51bGwsXG4gICAgICAgICAgb25DbGljazogbnVsbFxuICAgICAgICB9KTtcblxuICAgICAgICBjZWxsLmNsYXNzTWFwID0ge1xuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2VsbGBdOiB0cnVlLFxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc2VsZWN0ZWQtY2VsbGBdOiBjZWxsLmlzQ3VycmVudCxcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNlbGwtZGlzYWJsZWRgXTogZGlzYWJsZWQsXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1sYXN0LWRlY2FkZS1jZWxsYF06IGNlbGwuaXNMb3dlclRoYW5TdGFydCxcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW5leHQtZGVjYWRlLWNlbGxgXTogY2VsbC5pc0JpZ2dlclRoYW5FbmRcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoY2VsbC5pc0xvd2VyVGhhblN0YXJ0KSB7XG4gICAgICAgICAgY2VsbC5vbkNsaWNrID0gKCkgPT4gdGhpcy5wcmV2aW91c0RlY2FkZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGNlbGwuaXNCaWdnZXJUaGFuRW5kKSB7XG4gICAgICAgICAgY2VsbC5vbkNsaWNrID0gKCkgPT4gdGhpcy5uZXh0RGVjYWRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2VsbC5vbkNsaWNrID0gKCkgPT4gdGhpcy5jaG9vc2VZZWFyKGNlbGwueWVhcik7XG4gICAgICAgIH1cblxuICAgICAgICBpbmRleCsrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geWVhcnM7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYW5lbFllYXJEYXRhIHtcbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgeWVhcjogbnVtYmVyO1xuICB0aXRsZTogc3RyaW5nO1xuICBpc0N1cnJlbnQ6IGJvb2xlYW47XG4gIGlzTG93ZXJUaGFuU3RhcnQ6IGJvb2xlYW47XG4gIGlzQmlnZ2VyVGhhbkVuZDogYm9vbGVhbjtcbiAgY2xhc3NNYXA6IG9iamVjdCB8IG51bGw7XG4gIG9uQ2xpY2s6IFZvaWRGdW5jdGlvbiB8IG51bGw7XG59XG4iXX0=