

# ang-week2

- **Binding**
    - Data binding automatically keeps your page up-to-date based on your application's state. You use data binding to specify things such as the source of an image, the state of a button, or data for a particular user.
    
    - **one-way data bind**
        - **Interpolation Binding   —→ {{ }}**
            
            ![Untitled](https://raw.githubusercontent.com/maiallam57/Angular/app1/Untitled.png)
            
            ```html
            <h2>{{value}}</h2>
            ```
            
        
        - **Property Binding  —→ [ ]**
            
            ```html
            <img [src] = "image" alt="" style="height: 100px; width: 250px" class="center">
            ```
            
            - insert html
            
            ```html
            <h2 [innerHTML]='textData'></h2>
            ```
            
            - Use the `ngNonBindable` attribute to indicate Angular shouldn't compile the contents of that DOM element.
            
            ```html
            <h2 ngNonBindable>{{Hello}}</h2>
            ```
            
            ```tsx
            textData:string = '<span>Hello Ahmed</span>'
            ```
            
        
        - **Event Binding —→ (event) = “functionCall”**
            
            ```html
            <button (click)="onClick()">Subscribe to Simplilearn</button>
            ```
            
        
        ![Untitled](https://raw.githubusercontent.com/maiallam57/Angular/app1/Untitled%201.png)
        
        ![Untitled](https://raw.githubusercontent.com/maiallam57/Angular/app1/Untitled%202.png)
        
        ![Untitled](https://raw.githubusercontent.com/maiallam57/Angular/app1/Untitled%203.png)
        
        - **ternary operator —→  condition? doThisIfTrue : doThisIfFalse**
            
            ```tsx
            1 > 2 ? console.log(true) : console.log(false);
            
            //--------------------
            
            //return red if condition true - return green if condition false
            1 > 2 ? 'red' : 'green'
            ```
            
        
        - **Class Binding**
            
            ```html
            // if condition return true  ---> add class bg-danger to element
            <h3 [class.bg-danger]="onSale == false">ahmed</h3>
            //-----------------------------
            // if condition return true  ---> add class bg-danger to element else add bg-dark
            <h3 [class]="onSale == false ? 'bg-danger':'bg-dark'">ahmed</h3>
            ```
            
        
        - **style Binding**
            
            ```html
            // if condition return true  ---> add value red to background-color else add value blue to background-color
            <h3 [style.background-color]="onSale == true ? 'red' : 'blue'">ahmed</h3>
            //-----------------------------
            // if condition return true  ---> add background-color:red to element  else add add background-color:blue
            <h3 [style]="onSale == false ? 'background-color:red' : 'background-color:blue'">ahmed</h3>
            
            ```
            
    
- **control flow**
    - **@if**
        
        The [`@if`](https://v17.angular.io/api/core/if) block conditionally displays its content when its condition expression is truthy:
        
        ```html
        @if (a > b) {
          {{a}} is greater than {{b}}
        }
        ```
        
        - The [`@if`](https://v17.angular.io/api/core/if) block might have one or more associated branches. Immediately after an [`@if`](https://v17.angular.io/api/core/if) block, you can optionally specify any number of `@else if` blocks and one `@else` block:
        
        ```html
        @if (a > b) {
          {{a}} is greater than {{b}}
        } @else if (b > a) {
          {{a}} is less than {{b}}
        } @else {
          {{a}} is equal to {{b}}
        }
        ```
        
    
    - **@for block - repeaters**
        - The @for block renders its content for each item in a collection.
            
            ```html
            @for (item of items; track $index) {
              {{ item.name }}
            }
            ```
            
            The [`@for`](https://v17.angular.io/api/core/for) block requires a `track` expression. Angular uses the value of this expression as a unique identity for each item. This identity allows the framework to perform the minimal set of DOM operations necessary after items are added, removed, or reordered.
            
            For simple cases, you can use `track $index` as a reasonable default.
            
            - $index and other contextual variables
            
            ![Untitled](https://raw.githubusercontent.com/maiallam57/Angular/app1/Untitled%204.png)
            
    
    - **empty block**
        - You can optionally include an `@empty` section immediately after the [`@for`](https://v17.angular.io/api/core/for) block content. The content of the `@empty` block displays when there are no items:
        
        ```html
        @for (item of items; track item.name) {
          <li> {{ item.name }}</li>
        } @empty {
          <li> There are no items.</li>
        }
        ```
        
    
    - **@switch block - selection**
        
        The syntax for `switch` is similar to `if`, inspired by the JavaScript `switch` statement:
        
        ```html
        
        @switch (condition) {
          @case (caseA) {
            Case A.
          }
          @case (caseB) {
            Case B.
          }
          @default {
            Default case.
          }
        }
        ```
        
    
- **Directive —→ Structure Directive (angular16)**
    - **What is Directives???**
        - In Angular, a directive is a special token in the markup that tells the Angular framework to do something with a DOM element. Directives are a way to extend and enhance the functionality of HTML elements in your Angular applications. They allow you to create reusable components and add behavior to the HTML elements.
        
    
    ![1_OhepgWassGUMkQ6v8VtK3g.webp](ang-week2%201ba7e57728ff42a3b8e05d7296add9d5/1_OhepgWassGUMkQ6v8VtK3g.webp)
    
    - **Types:**
        - 1. *Components — directives with a template.*
        - 2. *Structural directives — change the DOM layout by adding and removing DOM elements.*
        - 3. *Attribute directives — change the appearance or behavior of an element, component, or another directive.*
    
    - **Structural Directives:**
        - Structural Directives are responsible for changing the structure of the DOM. They work by adding or removing the elements from the DOM
        
        - **NgIf**
            - It is used to create or remove a part of the DOM tree depending on a condition.
            
            ```html
            <div *ngIf=”onSale;else demo”>Hello Sale</div>
            
            //------------
            <ng-template #demo>
            <div>Sale Not Found</div>
            </ng-template>
            ```
            
        - **NgFor**
            - It is used to customize data display. It is mainly used for displaying a list of items using repetitive loops.
            
            ```html
            <div *ngFor="let movie of movies">{{movie.name}}</div>
            ```
            
        - **NgSwitch**
            - It is like the JavaScript switch. It can display one element from among several possible elements, based on a switch condition. Angular puts only the selected element into the DOM.
            
            ```html
            <div [ngSwitch]="conditionExpression">
                  <div *ngSwitchCase="expression1">
                     <h3>expression1 match</h3>
                  </div>
                  <div *ngSwitchCase="expression2">
                    <h3>expression2 match</h3>
                  </div>
                  <div *ngSwitchDefault>
                     <h3>Default</h3>
                  </div>
               </div>
            ```
            
- **Routing**
    - **add routing in app-routing-module**
        
        ```tsx
        const routes: Routes = [
          { path: '', redirectTo: 'main Path Here', pathMatch: 'full' },
          { path: 'home', component: HomeComponent, title: 'Home' },// title --->Title page Name
          { path: 'about', component: AboutComponent, title: 'About' },
          { path: 'gallery', component: GalleryComponent, title: 'gallery' },
        { path: 'contact', component: ContactComponent, title: 'contact' },
          { path: '**', component: NotFoundComponent, title: 'NotFound' },// if not match any path
        ];
        ```
        
    - **add routerLink —> NavBar  and routerLinkActive**
        
        ```html
        <a class="nav-link" routerLink="/home" routerLinkActive="active-link"aria-current="page">Home</a>
        <a class="nav-link" routerLink="/about" routerLinkActive="active-link"aria-current="page">about</a>
        <a class="nav-link" routerLink="/gallery" routerLinkActive="active-link"aria-current="page">gallery</a>
        <a class="nav-link" routerLink="/contact" routerLinkActive="active-link"aria-current="page">contact</a>
        <!--  
        routerLink ===> change path 
        routerLinkActive  ==> to add class active-link if match path  
         -->
        ```
        
    - **add — routerOutLet—>app component**
        
        ```html
        <app-navbar />
        <router-outlet />  <!--  to change component here ==> in app component  -->  
        <app-footer />
        ```
        

- **nested Routing**
    - **add routing —> Nested routing**
    
    ```tsx
    {path: 'gallery',component: GalleryComponent, // parent Component ---> parent Path
        children: [ // Child Component ---> Child Path
          { path: '', redirectTo: 'web', pathMatch: 'full' },
          { path: 'web', component: WebComponent },
          { path: 'mobile', component: MobileComponent },
        ],
      },
    ```
    
    - **add — routerOutLet—>Gallery component (Parent Component —> Parent Path)**
    
    ```html
    <div class="row">
        <div class="col-md-3">
          <ul>
            <li><a routerLink="web" routerLinkActive="text-bg-danger"> Web </a></li> 
            <li>
              <a routerLink="mobile" routerLinkActive="text-bg-danger"> Mobile </a>
            </li>
          </ul>
        </div>
    
        <div class="col-md-9">
          <router-outlet /> <!--  to change component here ==> in gallery component  -->  
        </div>
      </div>
    <!--  
    routerLink ===> change path 
    routerLinkActive  ==> to add class active-link if match path  
     -->
    ```
    
- **ngClass , ngStyle**
    - **ngClass —>attribute Directive**
        
        ```tsx
        <span
                  class="badge position-absolute top-0 end-0"
        
                  [ngClass]="{ <!-- when you need to dynamically set multiple CSS classes based on conditions. -->
                    'bg-danger': movie.vote_average > 6.5,
                    'bg-dark': movie.vote_average < 6.5
                  }"
                >
                  {{ movie.vote_average }}
        </span>
        ```
        
    - **ngstyle —>attribute Directive**
        
        ```tsx
        <span
                  class="badge position-absolute top-0 end-0"
        
                  [ngStyle]="{ <!-- when you need to dynamically set multiple CSS style based on conditions. -->
                    'background-color': movie.vote_average > 6.5 ? 'red' : 'blue',
                    'color': movie.vote_average > 6.5 ? 'black' : 'white'
                  }"
                >
                  {{ movie.vote_average }}
                </span>
        ```
        
- **transfer data from parent to child**
    - A common pattern in Angular is sharing data between a parent component and one or more child components
    
    ![Untitled](https://raw.githubusercontent.com/maiallam57/Angular/app1/Untitled%205.png)
    
    ![Untitled](https://raw.githubusercontent.com/maiallam57/Angular/app1/Untitled%206.png)
    
    - **Sending data to a child component**
    - **Child Component**
        - **typescript**
            
            ```tsx
            export class ChildComponentName {
            // @Input({ required:true })  required any input
              @Input() userNameChild:string = ''; // decorate the property with @Input();
              @Input() userFriendsChild:string []=  // decorate the property with @Input();
            }
            ```
            
        - **html**
            
            ```html
            <section>
            
            <h2>Child component</h2>
            <p>
              Today's item: {{userNameChild}}
            </p>
            
            <ul>
                <li *ngFor="let user of userFriendsChild"> {{ user  }}   </li>
            </ul>
            
            </section>
            ```
            
    - **Parent Component**
        - **typescript**
            
            ```tsx
            export class ParentComponentName {
               userNameParent:string = 'ahmed menisy'; 
                 userFriendsParent:string []= ["ahmed","ali","usama ali","bahnassy"]
            }
            ```
            
        - **html**
            
            ```html
            <section>
            <h2>Parent component</h2>
            <p> {{ userNameParent }} </p>
                <app-childName [userNameChild]="userNameParent" [userFriendsChild]="userFriendsParent" />
            </section>
            ```
            
        
- **two way binding**
    
    ![Untitled](https://raw.githubusercontent.com/maiallam57/Angular/app1/Untitled%207.png)
    
    ![Untitled](https://raw.githubusercontent.com/maiallam57/Angular/app1/Untitled%208.png)
    
    - import FormsModule in app module —→ import { FormsModule } from '@angular/forms';
        
        ```tsx
        nameText: string = '';
        ```
        
        ```html
        <input
            [(ngModel)]="nameText"
            type="text"
            class="form-control"
          />
        
        <p> {{ nameText  }} </p>
        ```
        
- **Deploy Angular Project To Github (Demo Live) —> [https://rb.gy/ffq06](https://rb.gy/ffq06)**
