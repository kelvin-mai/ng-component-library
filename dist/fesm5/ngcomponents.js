import { Component, Output, Input, EventEmitter, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.onClick = new EventEmitter();
    }
    ButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mai-button',
                    template: "<button [class]=\"btnStyle\" #buttonText (click)=\"onClick.emit($event)\">\n  <ng-content></ng-content>\n</button>",
                    styles: ["button{padding:.5rem 2rem;margin:.5rem;font-size:1rem;color:#000;border:.1rem solid;border-radius:.5rem;text-transform:uppercase;transition:.3s ease-out}button:active,button:focus{outline:0}.primary{border-color:var(--primary);color:var(--primary)}.primary:active,.primary:hover{background-color:var(--primary);color:#fff}.clear{border:none;color:#000}"]
                },] },
    ];
    ButtonComponent.propDecorators = {
        btnStyle: [{ type: Input }],
        onClick: [{ type: Output }]
    };
    return ButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ButtonModule = /** @class */ (function () {
    function ButtonModule() {
    }
    ButtonModule.decorators = [
        { type: NgModule, args: [{
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

export { ButtonModule, ButtonComponent as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjb21wb25lbnRzLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL25nY29tcG9uZW50cy9idXR0b24vYnV0dG9uLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgSW5wdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYWktYnV0dG9uJyxcbiAgdGVtcGxhdGU6IGA8YnV0dG9uIFtjbGFzc109XCJidG5TdHlsZVwiICNidXR0b25UZXh0IChjbGljayk9XCJvbkNsaWNrLmVtaXQoJGV2ZW50KVwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2J1dHRvbj5gLFxuICBzdHlsZXM6IFtgYnV0dG9ue3BhZGRpbmc6LjVyZW0gMnJlbTttYXJnaW46LjVyZW07Zm9udC1zaXplOjFyZW07Y29sb3I6IzAwMDtib3JkZXI6LjFyZW0gc29saWQ7Ym9yZGVyLXJhZGl1czouNXJlbTt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7dHJhbnNpdGlvbjouM3MgZWFzZS1vdXR9YnV0dG9uOmFjdGl2ZSxidXR0b246Zm9jdXN7b3V0bGluZTowfS5wcmltYXJ5e2JvcmRlci1jb2xvcjp2YXIoLS1wcmltYXJ5KTtjb2xvcjp2YXIoLS1wcmltYXJ5KX0ucHJpbWFyeTphY3RpdmUsLnByaW1hcnk6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1wcmltYXJ5KTtjb2xvcjojZmZmfS5jbGVhcntib3JkZXI6bm9uZTtjb2xvcjojMDAwfWBdXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGJ0blN0eWxlOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBvbkNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2J1dHRvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtCdXR0b25Db21wb25lbnRdLFxuICBpbXBvcnRzOiBbXSxcbiAgZXhwb3J0czogW0J1dHRvbkNvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW11cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uTW9kdWxlIHt9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O3VCQVd5QyxJQUFJLFlBQVksRUFBRTs7O2dCQVQxRCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxvSEFFRjtvQkFDUixNQUFNLEVBQUUsQ0FBQyxrV0FBa1csQ0FBQztpQkFDN1c7OzsyQkFFRSxLQUFLOzBCQUNMLE1BQU07OzBCQVhUOzs7Ozs7O0FDQUE7Ozs7Z0JBR0MsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQztvQkFDL0IsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO29CQUMxQixTQUFTLEVBQUUsRUFBRTtpQkFDZDs7dUJBUkQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==