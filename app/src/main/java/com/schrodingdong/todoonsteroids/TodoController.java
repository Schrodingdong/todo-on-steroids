package com.schrodingdong.todoonsteroids;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/todo")
@CrossOrigin(origins = "*")
public class TodoController {
    @Autowired
    private TodoService todoService;

    @GetMapping("/test")
    public String test() {
        return "Hello World!";
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody TodoModel todoModel) {
        return ResponseEntity.ok(todoService.create(todoModel));
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<?> get(@PathVariable Long id) {
        return ResponseEntity.ok(todoService.get(id));
    }

    @GetMapping("/get")
    public ResponseEntity<?> getAll() {
        return ResponseEntity.ok(todoService.getAll());
    }

    @PutMapping("/update")
    public ResponseEntity<?> update(@RequestBody TodoModel todoModel) {
        return ResponseEntity.ok(todoService.update(todoModel));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        todoService.delete(id);
        return ResponseEntity.ok().build();
    }

}
