<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CheckCircleSvelte from '../../../lib/24/outline/check-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: CheckCircleSvelte,
		args: { class: '' },
	})
</script>

<Story name="CheckCircle" />
