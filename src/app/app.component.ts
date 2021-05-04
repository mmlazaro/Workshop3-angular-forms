import { Component } from '@angular/core';

export type EditorType = 'reactive' | 'template';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editor: EditorType = 'template';

  get showReactiveEditor() {
    return this.editor === 'reactive';
  }

  get showTemplateEditor() {
    return this.editor === 'template';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}
