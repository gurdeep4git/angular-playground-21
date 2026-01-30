import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, computed, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import {
  debounceTime,
  distinctUntilChanged,
  of,
  shareReplay,
  switchMap,
  tap,
} from 'rxjs';

interface RecipeResponse {
  recipes: Recipe[];
  total: number;
  skip: number;
  limit: number;
}

interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}
@Component({
  selector: 'app-recepies',
  imports: [CommonModule],
  templateUrl: './recepies.component.html',
  styleUrl: './recepies.component.scss',
})
export class RecepiesComponent {
  constructor(private http: HttpClient) {}

  /*
    AUTH INTERCEPTOR ADDED TO ALTER THE REQ HEADERS
    GLOBAL INTERCEPTOR IS ADDED FOR LOADER
    ERROR HANDLING INTERCEPTOR

    whenever an api is called, the loader will show and hide automatically
  */

  /**
   * NOTE
    In Angular, toSignal must be called during the "creation" phase (usually as a class property or in the constructor). You cannot call toSignal inside a method like fetchSingleRecipe because it tries to register itself with the component's underlying lifecycle at a point where it's already too late.
  */
  selectedRecpieId = signal<number | null>(null);
  searchTerm = signal<string>('');

  private allRecipes$ = this.http
    .get<RecipeResponse>('https://dummyjson.com/recipes')
    .pipe(
      tap(() => console.log('API CALLED!')), // Watch your console
      shareReplay(1),
    );

  /*
  recipes = toSignal(
    this.http.get<RecipeResponse>(`https://dummyjson.com/recipes`),
    {
      initialValue: { recipes: [], total: 0, skip: 0, limit: 0 },
    },
  );
  */

  selectedRecpie = toSignal(
    toObservable(this.selectedRecpieId).pipe(
      switchMap((id) => {
        if (id === null) return of(null); // If ID is null, emit null immediately
        return this.http.get<Recipe>(`https://dummyjson.com/recipes/${id}`);
      }),
    ),
    { initialValue: null },
  );

  recepies = toSignal(
    toObservable(this.searchTerm).pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((q) => {
        if (!q || q === '') {
          return this.allRecipes$;
        }

        return this.http.get<RecipeResponse>(
          `https://dummyjson.com/recipes/search?q=${q}`,
        );
      }),
    ),
    {
      initialValue: { recipes: [], total: 0, skip: 0, limit: 0 },
    },
  );

  recepiesCount = computed(() => this.recepies().recipes.length);

  /*
  data = toSignal(
    forkJoin({
      recipesList: this.http.get<RecipeResponse>(
        `https://dummyjson.com/recipes`,
      ),
      singleRecipe: this.http.get<Recipe>(`https://dummyjson.com/recipes/1`),
    }),
    {
      initialValue: {
        recipesList: { recipes: [], total: 0, skip: 0, limit: 0 },
        singleRecipe: {} as Recipe,
      },
    },
  );
  */

  onSearch(e: Event) {
    const value = (e.target as HTMLInputElement).value.trim();
    this.searchTerm.set(value);
  }

  fetchSingleRecpie(id: number) {
    this.selectedRecpieId.set(id);
  }

  onBack() {
    this.selectedRecpieId.set(null);
  }
}
