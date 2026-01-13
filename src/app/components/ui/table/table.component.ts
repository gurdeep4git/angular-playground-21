import { Component, computed, effect, input } from '@angular/core';
import { ProductModel } from '../../../models/product-model.model';
import { LabelValue } from '../../../models/label-value.model';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  headers = input<LabelValue[]>([]);
  data = input<ProductModel[]>([]);
  
  mappedData = computed(() => {
  const sourceData = this.data();
  const headers = this.headers();  

  return sourceData.map(item => {
    // We reduce the headers array to build a new object for each row
    return headers.reduce((acc, h) => {
      const key = h.value;
      // Assign the value from the original item to the new object
      acc[key] = (item as any)[key];
      return acc;
    }, {} as any);
  });
});
}
