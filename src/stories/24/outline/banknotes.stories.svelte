<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BanknotesSvelte from '../../../lib/24/outline/banknotes.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: BanknotesSvelte,
		args: { class: '' },
	})
</script>

<Story name="Banknotes" />
