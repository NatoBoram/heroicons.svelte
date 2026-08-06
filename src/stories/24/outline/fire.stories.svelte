<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FireSvelte from '../../../lib/24/outline/fire.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: FireSvelte,
		args: { class: '' },
	})
</script>

<Story name="Fire" />
