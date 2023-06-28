package com.ramp.accountingservice.exception;
public class InvalidVendorException extends RuntimeException {
    public InvalidVendorException(String message) {
        super(message);
    }
}