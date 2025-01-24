<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BanknotesSvelte from '../../../lib/16/solid/banknotes.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: BanknotesSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Banknotes" />
