Namespace MvcMovie
    Public Class HelloWorldController
        Inherits System.Web.Mvc.Controller

        '
        ' GET: /HelloWorld
        Function Index() As ActionResult
            Return View()
        End Function

        '
        ' GET: /HelloWorld
        Function Welcome(ByVal name As String, Optional ByVal numTimes As Integer = 1) As ActionResult
            ViewData("Message") = "Hi " & name
            ViewData("NumTimes") = numTimes
            Return View()
        End Function

        <HttpPost>
        Public Function JqAJAX(persona As Student) As JsonResult
            Return Json(New With {.msg = "Successfully added " + persona.Name})
        End Function

        <HttpPost>
        Public Function AgregaListaPersonas(persona As List(Of Student)) As JsonResult
            Try


                Return Json(New With {.msg = "Successfully added " + persona.Count.ToString})
            Catch ex As Exception
                Throw
            End Try
        End Function




    End Class
End Namespace