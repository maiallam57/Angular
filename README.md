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
    
    ![angular-arch.jpg](https://raw.githubusercontent.com/maiallam57/Angular/app1/angular-arch.jpg)
    
    - another image
        
        ![archh.jpg](https://raw.githubusercontent.com/maiallam57/Angular/app1/archh.jpg)
        
    - version 17
        
        ![angular - arch.jpg](https://raw.githubusercontent.com/maiallam57/Angular/app1/angular_-_arch.jpg)
        
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
        
        ![Untitled](https://raw.githubusercontent.com/maiallam57/Angular/app1/Untitled.png)
        
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
        
        ![Untitled](https://raw.githubusercontent.com/maiallam57/Angular/app1/Untitled%201.png)
        
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
            
            ![test.jpg](https://raw.githubusercontent.com/maiallam57/Angular/app1/test.jpg)
            
        
    

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

