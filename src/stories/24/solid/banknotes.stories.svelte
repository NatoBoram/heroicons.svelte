<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BanknotesSvelte from '../../../lib/24/solid/banknotes.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: BanknotesSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Banknotes" />
