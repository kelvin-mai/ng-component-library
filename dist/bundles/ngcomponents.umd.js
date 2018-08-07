(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngcomponents', ['exports', '@angular/core'], factory) :
    (factory((global.ngcomponents = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ButtonComponent = (function () {
        function ButtonComponent() {
            this.onClick = new core.EventEmitter();
        }
        ButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mai-button',
                        template: "<button [class]=\"btnStyle\" #buttonText (click)=\"onClick.emit($event)\">\n  <ng-content></ng-content>\n</button>",
                        styles: ["button{padding:.5rem 2rem;margin:.5rem;font-size:1rem;color:#000;border:.1rem solid;border-radius:.5rem;text-transform:uppercase;transition:.3s ease-out}button:active,button:focus{outline:0}.primary{border-color:var(--primary);color:var(--primary)}.primary:active,.primary:hover{background-color:var(--primary);color:#fff}.clear{border:none;color:#000}"]
                    },] },
        ];
        ButtonComponent.propDecorators = {
            btnStyle: [{ type: core.Input }],
            onClick: [{ type: core.Output }]
        };
        return ButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ButtonModule = (function () {
        function ButtonModule() {
        }
        ButtonModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [ButtonComponent],
                        imports: [],
                        exports: [ButtonComponent],
                        providers: []
                    },] },
        ];
        return ButtonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.ButtonModule = ButtonModule;
    exports.ɵa = ButtonComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjb21wb25lbnRzLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmdjb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9uZ2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIElucHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWFpLWJ1dHRvbicsXG4gIHRlbXBsYXRlOiBgPGJ1dHRvbiBbY2xhc3NdPVwiYnRuU3R5bGVcIiAjYnV0dG9uVGV4dCAoY2xpY2spPVwib25DbGljay5lbWl0KCRldmVudClcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9idXR0b24+YCxcbiAgc3R5bGVzOiBbYGJ1dHRvbntwYWRkaW5nOi41cmVtIDJyZW07bWFyZ2luOi41cmVtO2ZvbnQtc2l6ZToxcmVtO2NvbG9yOiMwMDA7Ym9yZGVyOi4xcmVtIHNvbGlkO2JvcmRlci1yYWRpdXM6LjVyZW07dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO3RyYW5zaXRpb246LjNzIGVhc2Utb3V0fWJ1dHRvbjphY3RpdmUsYnV0dG9uOmZvY3Vze291dGxpbmU6MH0ucHJpbWFyeXtib3JkZXItY29sb3I6dmFyKC0tcHJpbWFyeSk7Y29sb3I6dmFyKC0tcHJpbWFyeSl9LnByaW1hcnk6YWN0aXZlLC5wcmltYXJ5OmhvdmVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tcHJpbWFyeSk7Y29sb3I6I2ZmZn0uY2xlYXJ7Ym9yZGVyOm5vbmU7Y29sb3I6IzAwMH1gXVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQge1xuICBASW5wdXQoKSBidG5TdHlsZTogc3RyaW5nO1xuICBAT3V0cHV0KCkgb25DbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9idXR0b24uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQnV0dG9uQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW10sXG4gIGV4cG9ydHM6IFtCdXR0b25Db21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbk1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbIkV2ZW50RW1pdHRlciIsIkNvbXBvbmVudCIsIklucHV0IiwiT3V0cHV0IiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7MkJBV3lDLElBQUlBLGlCQUFZLEVBQUU7OztvQkFUMURDLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsWUFBWTt3QkFDdEIsUUFBUSxFQUFFLG9IQUVGO3dCQUNSLE1BQU0sRUFBRSxDQUFDLGtXQUFrVyxDQUFDO3FCQUM3Vzs7OytCQUVFQyxVQUFLOzhCQUNMQyxXQUFNOzs4QkFYVDs7Ozs7OztBQ0FBOzs7O29CQUdDQyxhQUFRLFNBQUM7d0JBQ1IsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDO3dCQUMvQixPQUFPLEVBQUUsRUFBRTt3QkFDWCxPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7d0JBQzFCLFNBQVMsRUFBRSxFQUFFO3FCQUNkOzsyQkFSRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9