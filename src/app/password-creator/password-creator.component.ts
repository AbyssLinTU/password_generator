import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-password-creator',
  templateUrl: './password-creator.component.html',
  styleUrl: './password-creator.component.scss',
})
export class PasswordCreatorComponent {
  public MIN_PASSWORD_LENGTH = 4;
  public MAX_PASSWORD_LENGTH = 40;

  private uppArray: string[] = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  private lowArray: string[] = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  private numArray: string[] = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ];
  private symArray: string[] = [
    '#',
    '%',
    '&',
    '@',
    '[',
    ']',
    '<',
    '>',
    '-',
    '+',
    '*',
    '!',
    '?',
    '(',
    ')',
    ':',
    ';',
    '_',
    '=',
    '~',
    '^',
  ];
  constructor(private _fb: FormBuilder) {}
  public passwordForm = this._fb.group({
    password: [''],
    length: [this.MIN_PASSWORD_LENGTH],
    filter: this._fb.group({
      uppercase: [true],
      lowercase: [true],
      numbers: [false],
      symbols: [false],
    }),
  });
  public randomChar(array: string[]): string {
    return array[Math.floor(Math.random() * array.length)];
  }
  public GeneratePassword(): void {
    let password: string = '';
    const passwordLength = this.passwordForm.value.length || 0;
    const charCategories: string[][] = [];

    if (this.passwordForm.value.filter?.uppercase) {
      charCategories.push(this.uppArray);
    }
    if (this.passwordForm.value.filter?.lowercase) {
      charCategories.push(this.lowArray);
    }
    if (this.passwordForm.value.filter?.numbers) {
      charCategories.push(this.numArray);
    }
    if (this.passwordForm.value.filter?.symbols) {
      charCategories.push(this.symArray);
    }
    if (charCategories.length == 0) {
      alert('Нужно ввести хотя бы 1 параметр');
      return;
    }

    for (let index = 0; index < passwordLength; index++) {
      const randomCategoryIndex = Math.floor(
        Math.random() * charCategories.length
      );
      const randomChar = this.randomChar(charCategories[randomCategoryIndex]);
      password += randomChar;
    }

    this.passwordForm.value.password = password;
  }
  public CopyText() {
    navigator.clipboard.writeText(`${this.passwordForm.value?.password}`);
  }
  public handleMinus() {
    if (this.passwordForm.value?.length) {
      if (this.passwordForm.value.length <= this.MIN_PASSWORD_LENGTH) {
        return;
      } else {
        this.passwordForm.patchValue({
          length: this.passwordForm.value.length - 1,
        });
        this.GeneratePassword();
      }
    }
  }
  public handlePlus() {
    if (this.passwordForm.value?.length) {
      if (this.passwordForm.value.length >= this.MAX_PASSWORD_LENGTH) {
        return;
      } else {
        this.passwordForm.patchValue({
          length: this.passwordForm.value.length + 1,
        });
        this.GeneratePassword();
      }
    }
  }
  public calculateGradient(): string {
    if (this.passwordForm.value.length) {
      const percentage =
        ((this.passwordForm.value.length - this.MIN_PASSWORD_LENGTH) /
          (this.MAX_PASSWORD_LENGTH - this.MIN_PASSWORD_LENGTH)) *
        100;
      return `linear-gradient(to right, var(--accentPurple) 0%, var(--accentPurple) ${percentage}%, var(--lightGrey) ${percentage}%, var(--lightGrey) 100%)`;
    }
    return 'var(--lightGrey)';
  }
}
