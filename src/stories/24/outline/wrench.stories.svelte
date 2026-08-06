<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import WrenchSvelte from '../../../lib/24/outline/wrench.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: WrenchSvelte,
		args: { class: '' },
	})
</script>

<Story name="Wrench" />
