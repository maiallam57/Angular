# ang-week1

- **npm**
    - **Installing npm**
        - **npm** is installed with **Node.js**
        - **This means that you have to install Node.js to get npm installed on your computer.**
        - [https://nodejs.org/en](https://nodejs.org/en)
            
            
    - **npm** is the world's largest **Software Library** (Registry)
    - **npm** is also a software **Package Manager** and **Installer**
    - **npm** includes a **CLI** (Command Line Client) that can be used to download and install software:
        - npm install <package>
    
- **what is angular**
    - Angular is a modern MVVM framework and platform that is used to build enterprise Single-page Web Applications (or SPAs) using HTML and TypeScript. Angular is written in TypeScript
- **Installing Angular CLI**
    - Angular CLI is a command-line tool(assistant) that is used to perform various operations related to an Angular project. It lets developers create, run, test and build Angular projects using simple commands. It also lets developers create components, services, guards, etc.
    
    ```
    npm i -g @angular/cli@17
    ```
    
    - -g flag is used to install the package named “@angular/cli” globally on the system. Installing a module or package globally
    
    - You can verify that the Angular CLI package is installed successfully. To do so, after the installation has finished successfully, you can execute the following command in the terminal or in the command prompt.
        
        ```
        ng version
        ```
        
    
- **Creating a Project**
    - So now that the Angular CLI is installed, we are ready to create our very first Angular project using the CLI. The CLI will create all the required files and folders, download the required packages and set up the project locally. To create a new project, run the following command.
        
        ```
        ng new projectName
        ```
        
        - The first prompt your what stylesheet format you want to use. You can make a choice here. For now, we will select CSS. Press enter/return and the project creation starts.
        - The second question prompts you if you want to use ssr . Enter Yes and press enter/return. This will enable ssr in your project.
        
        - **Running the Project**
            
            ```
            ng serve --open
            ```
            
            - The `ng serve` command launches the server, watches your files, and rebuilds the app as you make changes to those files.
            - The `--open` (or just `-o`) option automatically opens your browser to `http://localhost:4200/`.
            
            - ***Note: The CLI watches the files only inside the src folder. If you change any other files, you may need to stop the development server altogether and re-serve the application to see the changes in effect.***
- **Angular architecture**
    - version 16
    
    ![angular-arch.jpg](ang-week1%207fcb761244524c1d91d861077b053154/angular-arch.jpg)
    
    - another image
        
        ![archh.jpg](ang-week1%207fcb761244524c1d91d861077b053154/archh.jpg)
        
    - version 17
        
        ![angular - arch.jpg](ang-week1%207fcb761244524c1d91d861077b053154/angular_-_arch.jpg)
        
- **Create Component with cli**
    - generate component with unit test
    
    ```
    ng g c componentName
    ```
    
    - generate component without unit test
    
    ```
    ng g c componentName --skip-tests
    ```
    
    - or angular json configuration to skip test file
        
        ![Untitled](ang-week1%207fcb761244524c1d91d861077b053154/Untitled.png)
        
    - Create Multi-Component with single commaned
        
         
        
        ```
        for %n in (compName1,compName2,....,....,.....) do ng g c %n 
        ```
        
- **start server**
    
    ```
    ng serve --open   // serve to run server  -->  --open to open serve a new tab
    or
    ng s -o
    
    ------------
    ng serve --open --hmr  // hmr  -->Hot Module Replacement -->faster for development
    or
    ng s -o --hmr  // hmr  -->Hot Module Replacement -->faster for development
    
    ```
    
- **app module  version 16**
    - Decorator ——> @NgModule
    - declarations —→ The declaration array is **used to tell the app module that they are part of the app module** then it lets you access all these components using selector anywhere in a component that is part of the app module
    - imports —→ import module we depend on
    - bootstrap —→ This is the initial component that loads when the app starts.
    - providers —→ provide services to app root injector
        
        ![Untitled](ang-week1%207fcb761244524c1d91d861077b053154/Untitled%201.png)
        
- **install bootstrap - fontawesome**
    - npm i bootstrap
    - npm i @fortawesome/fontawesome-free
    - or —→  npm i bootstrap @fortawesome/fontawesome-free
- **SPA (Single page application)**
    - **Single page application** (SPA) is a web application that fits on a single page. All your code (JavaScript, HTML, and CSS) is recovered with a single page stack. Further more, route between pages performed without invigorating the entire page.
    
    - **Why is Angular called a single-page application?**
        - AngularJS is a full featured SPA framework, with the help of which a single page application is created. In the SPA, the whole page is not reloaded every time, only every time the view will be change.
        - So when you load the application for the first time, not all the pages from the server will be rendered... It's only `index.html` that loads when you load the application. Since only a single page is loaded it is called SPA
        - 
            
            ![test.jpg](ang-week1%207fcb761244524c1d91d861077b053154/test.jpg)
            
        
    

---

- **TypeScript**
    - **What is TypeScript?**
        
        **TypeScript is JavaScript with syntax for types.**
        
        - TypeScript is a syntactic superset of JavaScript which adds **static typing**.
        - This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add **types**.
        - TypeScript adds additional syntax to JavaScript to support a **tighter integration with your editor**. Catch errors early in your editor.
        - TypeScript code converts to JavaScript, which **runs anywhere JavaScript runs**: In a browser, on Node.js or Deno and in your apps.
        
    - **install typescript —→ npm i -g typescript**
    - **transpile ts to js —→ tsc fileName.ts -w     ——>  -w watching**
    
    - **DataTypes**
        
        ```tsx
                //string
                let userName: string = "ahmed";
                //number
           let userAge: number = 10;
                //boolean
           let userIsLoggin: boolean = true;
                //undefined
           let user: undefined = undefined;
                //null
           let userNull: null = null;
                //object
           let userData: Object = { name: "ahmed", age: 30 };
        
                //string or number ---> Union
                let userData:string|number = "ahmed"
        
            // Declare a tuple type
                let x:[string, number] = ["ahmed",1] // OK
        
                let x:[string,number] = [10, "hello"]; // Error
        
                //array of number
                let list: number[] = [1, 2, 3];
        
                //array of string
                let list: string[] = ["ahmed", "ali", "medo"];
        
            //array of number or string
                let list: (string|number)[] = ["ahmed", "ali", "medo",1,2,3];
        
        ```
        
        ```tsx
        // datatype function
        // void  -->if function don't return anything, this function type name have void
        
        function work(name: string):void {
              console.log(name);
           }
        
        //------------------------------
        
        // void  -->if function don't return anything, this function type name have void
        //finally example
        function add(num1: number, num2: number):void{
         console.log(num1+num2) 
        }
        
        // function parameters number and return number
        function add(num1: number, num2: number):number{
         return num1+num2
        }
        
        ```
        
    
    - **Interfaces**
        - An interface is a syntactical contract that an entity should conform to. In other words, an interface defines the syntax that any entity must adhere to.
        - Interfaces define properties, methods, and events, which are the members of the interface. Interfaces contain only the declaration of the members. It is the responsibility of the deriving class to define the members. It often helps in providing a standard structure that the deriving classes would follow.
        
        ```tsx
        //syntax
        interface interface_name { 
        }
        
        interface IPerson { 
           firstName:string;
           lastName:string;
           sayHi():string;
        } 
        
        let customer:IPerson = { 
           firstName:"Tom",
           lastName:"Hanks", 
           sayHi: ():string => "Hi there" 
        }
        ```
        
    
    - **Generics**
        - What are Generics?
        Generics have been a major feature of strongly typed languages
        like Java and C#. In TypeScript, they allow the types of components
        and functions to be "SPECIFIED LATER" which allows them to be used
        in creating reusable components that can apply to different use cases,
        
        ```tsx
        function returnInput <T>(arg: T): T{
          return arg;
        };
        const returnInputStr = returnInput<string>('Foo Bar');
        const returnInputNum = returnInput<number>(5);
        
        console.log(returnInputStr); // Foo Bar
        console.log(returnInputNum); // 5
        
        //----------------------------------------------
        
        function returnInput <T>(arg: T[]): T[]{
          return arg;
        };
        const returnInputStr = returnInput<string>(["ahmed","ahmed"]);
        const returnInputNum = returnInput<number>([5,6,7]);
        
        console.log(returnInputStr); // ["ahmed","ahmed"]
        console.log(returnInputNum); // [5,6,7]
        ```



        # ang-week2
        
        - **Binding**
            - Data binding automatically keeps your page up-to-date based on your application's state. You use data binding to specify things such as the source of an image, the state of a button, or data for a particular user.
            
            - **one-way data bind**
                - **Interpolation Binding   —→ {{ }}**
                    
                    ![Untitled](ang-week2%201ba7e57728ff42a3b8e05d7296add9d5/Untitled.png)
                    
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
                    
                
                ![Untitled](ang-week2%201ba7e57728ff42a3b8e05d7296add9d5/Untitled%201.png)
                
                ![Untitled](ang-week2%201ba7e57728ff42a3b8e05d7296add9d5/Untitled%202.png)
                
                ![Untitled](ang-week2%201ba7e57728ff42a3b8e05d7296add9d5/Untitled%203.png)
                
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
                    
                    ![Untitled](ang-week2%201ba7e57728ff42a3b8e05d7296add9d5/Untitled%204.png)
                    
            
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
            
            ![Untitled](ang-week2%201ba7e57728ff42a3b8e05d7296add9d5/Untitled%205.png)
            
            ![Untitled](ang-week2%201ba7e57728ff42a3b8e05d7296add9d5/Untitled%206.png)
            
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
            
            ![Untitled](ang-week2%201ba7e57728ff42a3b8e05d7296add9d5/Untitled%207.png)
            
            ![Untitled](ang-week2%201ba7e57728ff42a3b8e05d7296add9d5/Untitled%208.png)
            
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
