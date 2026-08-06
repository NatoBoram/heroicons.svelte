<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Cog6ToothSvelte from '../../../lib/24/outline/cog-6-tooth.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: Cog6ToothSvelte,
		args: { class: '' },
	})
</script>

<Story name="Cog6Tooth" />
