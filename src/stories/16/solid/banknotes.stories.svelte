<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BanknotesSvelte from '../../../lib/16/solid/banknotes.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: BanknotesSvelte,
		args: { class: '' },
	})
</script>

<Story name="Banknotes" />
