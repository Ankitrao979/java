import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PaymentValidator {

   static spacesNotAllowed(control : AbstractControl ) : ValidationErrors | null {

        if((control.value as string).indexOf(' ') > 0 ) {
            return {
                spacesNotAllowed : true
            }
        }

        return null;
    }

}