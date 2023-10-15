package com.schrodingdong.todoonsteroids;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoService {
    @Autowired
    private TodoRepository todoRepository;
    public TodoModel create(TodoModel todoModel) {
        return todoRepository.save(todoModel);
    }
    public TodoModel get(Long id) {
        return todoRepository.getReferenceById(id);
    }
    public TodoModel update(TodoModel todoModel) {
        return todoRepository.save(todoModel);
    }
    public void delete(Long id) {
        todoRepository.deleteById(id);
    }
    public Iterable<TodoModel> getAll() {
        return todoRepository.findAll();
    }
}
