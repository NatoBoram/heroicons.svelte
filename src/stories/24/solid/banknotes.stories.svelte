<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BanknotesSvelte from '../../../lib/24/solid/banknotes.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: BanknotesSvelte,
		args: { class: '' },
	})
</script>

<Story name="Banknotes" />
