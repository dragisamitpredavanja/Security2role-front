
package services;

public class AuthService {

    public boolean login(String username, String password) {
        // Placeholder logic for authentication
        if (username == null || password == null) {
            return false;
        }
        return username.equals("admin") && password.equals("password");
    }

    public void logout() {
        // Placeholder logic for logout
        System.out.println("User logged out successfully.");
    }
}