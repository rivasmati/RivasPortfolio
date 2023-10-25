package com.examen.dao;

import java.util.List;

public interface IDao <T>{

    public T registrar(T t);

    public List<T> listarTodos();

}
