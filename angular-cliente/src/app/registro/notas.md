# Notas.

Para que los formularios funciones con el modulo forms hacer esto en `app.module.ts`

```ts
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// y luego en @ngModule

imports: [
    ...,
    ReactiveFormsModule,
]
```

De esta manera funcionaran los formularios creados con el modulo.