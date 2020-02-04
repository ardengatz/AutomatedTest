@Companies
Feature: Companies
    As a user
    I should be able to Create, Read, Update, and Delete a Company.



    @CreateCompany
    Scenario: Create a Company
        Given I go to companies
        When I create a company
        Then I should see the created item details of the company

    # @CreateCompany @Updated
    # Scenario: Create a Company
    #     Given I go to "/#/hmws/companies"
    #     When I "create" a "Company"
    #     Then I should be redirected to the details page of the created "Company"
    #         And I should see the "created" item details of the "Company"
    # @ReadCompany @Updated
    # Scenario: Read company details from the table
    #     Given I have an existing "Company"
    #     When I go to "/#/hmws/companies"
    #     Then I should "see" the details of the "Companies" in the table
    # @EditCompany @Updated
    # Scenario: Edit a Company
    #     Given I have an existing "Company"
    #         And I am on "/#/hmws/companies"
    #     When I "edit" a "Company"
    #     Then I should "see" the details of the "Companies" in the table
    #         And I should see the "updated" item details of the "Company" 
    # @DeleteCompany @Updated
    # Scenario: Delete a Company
    #     Given I have an existing "Company"
    #         And I am on "/#/hmws/companies"
    #     When I "delete" a "Company"
    #     Then I should "not see" the details of the "Company" in the table

# @Security
#     Feature: Security
#     As a User
#     I should be able to access the system with proper credentials

#     Scenario: Login
#     Given I am on the login page
#     When I log in
#     Then I should be redirected to the dashboard