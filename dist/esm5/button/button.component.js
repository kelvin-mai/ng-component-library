/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Output, Input, EventEmitter } from '@angular/core';
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
export { ButtonComponent };
if (false) {
    /** @type {?} */
    ButtonComponent.prototype.btnStyle;
    /** @type {?} */
    ButtonComponent.prototype.onClick;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImJ1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7dUJBVzlCLElBQUksWUFBWSxFQUFFOzs7Z0JBVDFELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLG9IQUVGO29CQUNSLE1BQU0sRUFBRSxDQUFDLGtXQUFrVyxDQUFDO2lCQUM3Vzs7OzJCQUVFLEtBQUs7MEJBQ0wsTUFBTTs7MEJBWFQ7O1NBU2EsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBJbnB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21haS1idXR0b24nLFxuICB0ZW1wbGF0ZTogYDxidXR0b24gW2NsYXNzXT1cImJ0blN0eWxlXCIgI2J1dHRvblRleHQgKGNsaWNrKT1cIm9uQ2xpY2suZW1pdCgkZXZlbnQpXCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvYnV0dG9uPmAsXG4gIHN0eWxlczogW2BidXR0b257cGFkZGluZzouNXJlbSAycmVtO21hcmdpbjouNXJlbTtmb250LXNpemU6MXJlbTtjb2xvcjojMDAwO2JvcmRlcjouMXJlbSBzb2xpZDtib3JkZXItcmFkaXVzOi41cmVtO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTt0cmFuc2l0aW9uOi4zcyBlYXNlLW91dH1idXR0b246YWN0aXZlLGJ1dHRvbjpmb2N1c3tvdXRsaW5lOjB9LnByaW1hcnl7Ym9yZGVyLWNvbG9yOnZhcigtLXByaW1hcnkpO2NvbG9yOnZhcigtLXByaW1hcnkpfS5wcmltYXJ5OmFjdGl2ZSwucHJpbWFyeTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXByaW1hcnkpO2NvbG9yOiNmZmZ9LmNsZWFye2JvcmRlcjpub25lO2NvbG9yOiMwMDB9YF1cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgYnRuU3R5bGU6IHN0cmluZztcbiAgQE91dHB1dCgpIG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xufVxuIl19