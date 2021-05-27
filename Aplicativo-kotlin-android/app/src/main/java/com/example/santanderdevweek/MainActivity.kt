package com.example.santanderdevweek

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val medicamento = Medicamento( "Teste 1",  "2 x ao dia")

        //medicamento.formula pega o valor
        // medicamento.formula = "teste 2" para mudar o valor

    }
}