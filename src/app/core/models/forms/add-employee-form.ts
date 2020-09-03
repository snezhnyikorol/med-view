import {ControlBaseModel} from '@models/controls/control-base-model';
import {ControlInputModel} from '@models/controls/control-input-model';
import {FormBaseModel} from '@models/forms/form-base.model';

// export const addEmployeeFormMetadata: ControlBaseModel<string>[] = [
//
//   new ControlInputModel({
//     key: 'firstName',
//     label: 'First name',
//     value: '',
//     required: true,
//     order: 1
//   }),
//
//   new ControlInputModel({
//     key: 'middleName',
//     label: 'Middle name',
//     value: '',
//     required: true,
//     order: 2
//   }),
//
//   new ControlInputModel({
//     key: 'lastName',
//     label: 'Last name',
//     value: '',
//     required: true,
//     order: 2
//   }),
//              // image in Base64 format?
// // firstName: string;
// // middleName: string;
// // lastName: string;
// // birthday: string;             // Date in ISO format поом объясню почему
// // gender: string;
// // tags: TagModel[];
// // maritalStatus: string;        // Семейное положение
// // contact: ContactModel;
// // address: {
// //   registration: AddressModel;
// //   actual: AddressModel;
// // };
//
// ];

export const addEmployeeFormMetadata: FormBaseModel = {
  groups: [
    {
      name: 'generalInfo',
      title: 'General info',
      controls: [
        new ControlInputModel({
          key: 'firstName',
          label: 'First name',
          value: '',
          required: true,
          order: 1
        }),

        new ControlInputModel({
          key: 'middleName',
          label: 'Middle name',
          value: '',
          required: true,
          order: 2
        }),

        new ControlInputModel({
          key: 'lastName',
          label: 'Last name',
          value: '',
          required: true,
          order: 2
        }),
      ]
    },
    {
      name: 'test',
      title: 'Test',
      controls: [
        new ControlInputModel({
          key: 'firstName',
          label: 'First name',
          value: '',
          required: true,
          order: 1
        }),

        new ControlInputModel({
          key: 'middleName',
          label: 'Middle name',
          value: '',
          required: true,
          order: 2
        }),

        new ControlInputModel({
          key: 'lastName',
          label: 'Last name',
          value: '',
          required: true,
          order: 2
        }),
      ]
    }
  ]
};
