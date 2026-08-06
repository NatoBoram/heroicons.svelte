<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowsPointingInSvelte from '../../../lib/24/outline/arrows-pointing-in.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowsPointingInSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowsPointingIn" />
