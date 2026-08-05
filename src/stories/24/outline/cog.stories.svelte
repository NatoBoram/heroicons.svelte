<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CogSvelte from '../../../lib/24/outline/cog.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: CogSvelte,
		args: { class: '' },
	})
</script>

<Story name="Cog" />
