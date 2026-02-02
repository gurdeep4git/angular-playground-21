import {
  Component,
  ComponentFactoryResolver,
  inputBinding,
  outputBinding,
  viewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-dynamic-component-load',
  imports: [],
  templateUrl: './dynamic-component-load.component.html',
  styleUrl: './dynamic-component-load.component.scss',
})
export class DynamicComponentLoadComponent {
  //@ViewChild('myContainer', {read:ViewContainerRef}) myContainer!: ViewContainerRef

  container = viewChild.required('myContainer', { read: ViewContainerRef });

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  async loadComponent() {
    const { AbcComponent } = await import('./abc/abc.component');
    this.container().clear();
    this.container().createComponent(AbcComponent, {
      bindings: [
        inputBinding('name', () => 'Hello from ABC'),
        outputBinding('onClear', () => this.container().clear()),
      ],
    });
  }

  /*
  ngAfterViewInit(): void {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(AbcComponent);

    // const containerRef = this.viewContainerRef
    // containerRef.clear()
    // containerRef.createComponent(compoentFactory);

    this.myContainer.clear();
    const abcComponent = this.myContainer.createComponent(componentFactory);
    abcComponent.setInput('name', 'Hello World');
  }
  */
}
