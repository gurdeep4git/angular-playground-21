import {applyWhen,email,max,minLength,pattern,required,schema,validate} from '@angular/forms/signals';

// FORM MODEL
export interface SubscribeModel {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  sendViaEmail: boolean;
  sendViaPhone: boolean;
  yearsAsFan: number;
}

// INITIAL FORM VALUES
export const init: SubscribeModel = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  yearsAsFan: 0,
  sendViaEmail: true,
  sendViaPhone: true,
};

// VALIDATIONS
export const subscribeSchema = schema<SubscribeModel>((root) => {
  required(root.firstName, { message: 'This is required' });
  required(root.lastName, { message: 'This is required' });

  applyWhen(
    root.email,
    (c) => !!c.valueOf(root.sendViaEmail),
    (root) => {
      required(root, {
        message: 'This is required',
      });
      email(root, { message: 'Please enter a valid email address' });
      minLength(root, 6, { message: 'Min Length should be 6' });
    },
  );

  applyWhen(
    root.phone,
    (c) => !!c.valueOf(root.sendViaPhone),
    (root) => {
      required(root, { message: 'This is required' });
      pattern(root, /^\d{3}-\d{3}-\d{4}$/, {
        message: 'Phone must be in format: 555-123-4567',
      });
    },
  );

  max(root.yearsAsFan, 25, { message: 'Max allowed is 25' });

  validate(root.sendViaEmail, ({ value, valueOf }) => {
    const sendViaEmailValue = value();
    const sendViaPhoneValue = valueOf(root.sendViaPhone);

    if (sendViaEmailValue || sendViaPhoneValue) {
      return null;
    }

    return {
      kind: 'SendVia',
      message: 'Select atleast one of sendVia',
    };
  });
});
