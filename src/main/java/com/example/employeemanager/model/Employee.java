package com.example.employeemanager.model;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@ToString
public class Employee implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(updatable = false, nullable = false)
    private Long id;
    private String name;
    private String email;
    private String jobTitle;
    private String i;
    private String imageUrl;
    @Column(updatable = false, nullable = false)
    private String employeeCode;
}
